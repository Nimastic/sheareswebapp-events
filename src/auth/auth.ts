import axios from 'axios';

export const refreshIdToken = async (refreshToken: string): Promise<string> => {
    const response = await axios.post("https://securetoken.googleapis.com/v1/token?key=AIzaSyCwZBST0SGguxuOqGKKpogiW1Lq0YOTpbw", {
        grant_type: "refresh_token",
        refreshToken: refreshToken,
    });
    const idToken = response.data.id_token;
    return idToken;
}