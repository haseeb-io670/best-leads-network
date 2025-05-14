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
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {

    const apiUrl = process.env.NEXT_PUBLIC_LARAVEL_API_URL;
    
    if (!apiUrl) {
      throw new Error('API URL is not configured');
    }

    const response = await fetch(`${apiUrl}/blogs/categories`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    const responseData = await response.json();
    
    if (responseData.success) {
      if(responseData.categories.length > 0) {
        return res.status(200).json({
          success: responseData.success,
          message: responseData.message,
          data: responseData.categories,
        });
      } else {
        return res.status(200).json({
          success: responseData.success,
          message: responseData.message,
        });
      }
    } else {
      throw new Error(responseData.message || 'Failed to fetch categories at the moment...');
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred while fetching categories.'
    });
  }
}