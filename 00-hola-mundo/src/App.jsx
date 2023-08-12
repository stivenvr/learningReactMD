import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

export function App(){
    return(
        <div className='App'>
           <TwitterFollowCard  userName={'midudev'} name={'Miguel'} initialIsFollowing/>
           <TwitterFollowCard  userName={'kikobeats?ttl=1h'} name={'Kiko beats'} />
           <TwitterFollowCard  userName={'midudev'} name={'Miguel'}/>
           <TwitterFollowCard  userName={'kikobeats?ttl=1h'} name={'Kiko beats'} initialIsFollowing/>
        </div>
    );
}