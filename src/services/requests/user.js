import {BASE_URL} from '@env';

export async function loginUser(email, password) {
  const reqBody = {
    email,
    password,
  };
  try {
    const req = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });

    const res = await req.json();

    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function postUser(
  username,
  name,
  email,
  preferences_categories,
  profile_type,
  password,
  plan,
) {
  const reqBody = {
    username,
    name,
    email,
    preferences_categories: [preferences_categories],
    profile_type,
    password,
    plan,
  };
  try {
    const res = await fetch(`${BASE_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    });
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function putUser(token, name, email, password) {
  const reqBody = {
    name,
    password,
  };
  try {
    const res = await fetch(`${BASE_URL}/user/${email}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(reqBody),
    });
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getUserByEmail(token, userEmail) {
  try {
    const req = await fetch(`${BASE_URL}/user/${userEmail}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const res = await req.json();

    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}
