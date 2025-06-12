import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Get the form data from the request body
    const formData = req.body;
    const clientIp = req.headers['x-real-ip'] || req.headers['x-forwarded-for']?.split(',')[0] || req.socket?.remoteAddress;

    formData['ipAddress'] = clientIp;

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'industry', 'leadVolume', 'ipAddress'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
    
    if (!apiUrl) {
      throw new Error('API URL is not configured');
    }

    const response = await fetch(`${apiUrl}/contact/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    
    if (!responseData.success) {
      throw new Error(responseData.message || 'Failed to submit contact form');
    }

    return res.status(200).json({
      success: responseData.success,
      message: responseData.message,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred while submitting the form'
    });
  }
}