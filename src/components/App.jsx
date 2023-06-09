// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import {Profile} from './user/user.js';
import {Statistics} from './statistics/statistics.js';
import { FriendList } from './friendList/friendList.js';
import { TransactionHistory } from './transactionHistory/transactionHistory.js';

import user from './user/user.json';
import data from './statistics/data.json';
import friends  from './friendList/friends.json';
import transactions from './transactionHistory/transactions.json';


export const App = () => {
// const isTitle = true;

  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
     <Statistics title="Upload stats" stats={data} /> 
    <Statistics stats={data} />
      
      <FriendList friends={friends} />; 
      <TransactionHistory items={transactions} />;      
    </div>
  
  )
};
