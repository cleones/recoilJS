import React from 'react';
import { useRecoilValue } from 'recoil';
import { userNamesList } from '../../../../atoms/users';
import { userToFollowerMap } from '../../../../atoms/users/selectors/followers';

const UserList = () => {
  const userNames = useRecoilValue(userNamesList);
  const followerMap = useRecoilValue(userToFollowerMap);

  return (
    <ul>
      {userNames.map((userName) => (
        <li key={userName}>
          {userName} - {followerMap[userName]}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
