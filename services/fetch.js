const BASE_URL = "https://apiesup.pappplanner.com";

const defaultHeaders = {
  "Content-Type": "application/json",
  // คุณสามารถเพิ่ม header อื่น ๆ ได้ที่นี่ เช่น Authorization token
};

// ฟังก์ชันช่วยสำหรับทำ GET request
export const fetchGet = async (endpoint, headers = {}) => {
  try {
    console.log("fetchGet", `${endpoint}`);
    
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        ...defaultHeaders,
        ...headers, // รวมกับ headers ที่ส่งเข้ามา
      },
    });

    if (!response.ok) {
      throw new Error(`GET request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch GET error:", error);
    throw error;
  }
};

// ฟังก์ชันช่วยสำหรับทำ POST request
export const fetchPost = async (endpoint, data, headers = {}) => {

  try {
   
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        ... defaultHeaders,
        ...headers, // รวมกับ headers ที่ส่งเข้ามา
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`POST request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch POST error:", error);
    throw error;
  }
};

export const fetchFile = async (endpoint, formData) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      body: formData, // ส่ง FormData โดยตรง
    });

    if (!response.ok) {
      throw new Error(`File upload failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch file error:", error);
    throw error;
  }
};