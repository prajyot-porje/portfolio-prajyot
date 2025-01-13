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
            return 'bg-[#edf3ab] dark:bg-[#252526]'
        }
        else if(title === 'profile'){
            return 'bg-[#e5cecb] dark:bg-[#252526]'
        }
        else if(title === 'bio'){
            return 'bg-[#f4f2ed] dark:bg-[#252526]'
        }
        else if(title === 'hobbies'){
            return 'bg-[#b3d6d2]  dark:bg-[#252526]'
        }
        else if(title === 'card1'){
            return 'bg-[#59595e]   dark:bg-[#252526]'
        }
        else if(title === 'card2'){
            return 'bg-[#fff]   dark:bg-[#252526]'
        }
    }
  

  return (
    <MagicCard
      bg={bglement()}
      className="cursor-pointer shadow-2xl "
    >
        {element()}
    </MagicCard>
  );
}

export default MagicCardsList