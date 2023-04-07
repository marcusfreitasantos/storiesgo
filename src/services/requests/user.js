import {api} from '../api';

export async function loginUser(email, password) {
  try {
    const res = await api.post('/login', {
      email,
      password,
    });
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
  try {
    const res = await api.post('/user', {
      username,
      name,
      email,
      preferences_categories: [preferences_categories],
      profile_type,
      password,
      plan,
    });
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function putUser(token, name, email, password) {
  try {
    const res = await api.put(
      `/user/${email}`,
      {
        name,
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getUserByEmail(token, userEmail) {
  try {
    const res = await api.get(`/user/${userEmail}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
