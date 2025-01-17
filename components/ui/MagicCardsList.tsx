import React from 'react'
import { MagicCard } from './magic-card'
import Skills from './bento-skills'
import Profile from './bento-profiles';
import Bio from './bento-bio';
import Hobbies from './bento-hobbies';

interface MagicCardsListProps {
  title: string;

}

const MagicCardsList: React.FC<MagicCardsListProps> = ({ title  }) => {
    function element(){
        if(title === 'Skills'){
            return <Skills/>
        }
        else if(title === 'profile'){
            return <Profile/>
        }
        else if(title === 'bio'){
            return <Bio/>
        }
        else if(title === 'hobbies'){
            return <Hobbies/>
        }
        else{
            <div></div>
        }
    }
    function bglement(){
        if(title === 'Skills'){
            return 'bg-gradient-to- dark:bg-gradient-to-b from-[#353ad9] to-[#150061] '
        }
        else if(title === 'profile'){
            return 'bg-gradient-to- dark:bg-gradient-to-l from-[#38c541] to-[#035811] '
        }
        else if(title === 'bio'){
            return 'bg-gradient-to-t from-[#8d38c5] to-[#ca7afb] dark:to-[#50035a] '
        }
        else if(title === 'hobbies'){
            return 'bg-gradient-to-r from-[#785124] to-[#7e6243]'
        }
        else if(title === 'card1'){
            return 'bg-gradient-to- dark:bg-gradient-to-b from-[#353ad9] to-[#150061] '
        }
        else if(title === 'card2'){
            return 'bg-gradient-to-r from-[#785124] to-[#7e6243] '
        }
    }
  

  return (
    <MagicCard
      bg={bglement()}
      className="cursor-pointer bg-gradient-to-t  shadow-2xl "
    >
        {element()}
    </MagicCard>
  );
}

export default MagicCardsList