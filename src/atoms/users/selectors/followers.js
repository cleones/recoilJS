import { selector } from 'recoil';
import { userNamesList } from '..';
import api from '../../../services/api';

export const userToFollowerMap = selector({
  key: 'userToFollowerMap',
  get: async ({ get }) => {
    const users = get(userNamesList);

    const responses = await Promise.all(
      users.map((user) => api.get(`/users/${user}`))
    );

    const followerMap = {};
    responses.forEach((response) => {
      const { data: user } = response;
      followerMap[user.login] = user.followers;
    });
    return followerMap;
  },
});
