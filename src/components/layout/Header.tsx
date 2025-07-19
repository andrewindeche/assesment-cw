import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

function Header({ isMobile }: { isMobile: boolean }) {
  return (
    <header
      className={`flex items-center justify-between ${
        isMobile ? 'px-4 py-2' : 'px-9 py-3'
      } bg-black border-b border-gray-400`}
      aria-labelledby="header section"
    >
      <div className="flex items-center gap-2">
        <img
          src="/task1/logo.png"
          alt="Logo"
          className={isMobile ? 'w-3 h-3' : 'w-3.5 h-3.5'}
        />
        <div
          className={`text-white font-bold ${
            isMobile ? 'text-sm' : 'text-md'
          }`}
        >
          Worctionary
        </div>
      </div>

      <div className={`flex items-center ${isMobile ? 'gap-2' : 'gap-4'}`}>
        <div className="relative">
          <span className={`absolute ${isMobile ? 'left-2' : 'left-3.5'} top-2.5`}>
            <Search
              className={`text-gray-400 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`}
            />
          </span>
          <Input
            type="text"
            value="Search"
            aria-label="header search input"
            className={`bg-[#2b2e34] text-gray-400 font-normal border-none focus:ring-0 rounded-md ${
              isMobile
                ? 'pl-9 w-32 h-9 text-base'
                : 'pl-12 w-41 h-10 text-2xl'
            }`}
          />
        </div>

        <Avatar className={isMobile ? 'w-14 h-9' : 'w-18 h-10'}>
          <AvatarImage src="assets/avatar.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export default Header;