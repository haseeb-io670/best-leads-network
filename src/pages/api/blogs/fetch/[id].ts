import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  message: string;
  data?: any;
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

    // Get the API URL from environment variable
    const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
    
    if (!apiUrl) {
      throw new Error('API URL is not configured');
    }

    const response = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any required authentication headers here
        // 'Authorization': 'Bearer YOUR_TOKEN'
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      data: data
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred while submitting the form'
    });
  }
}