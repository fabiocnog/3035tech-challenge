import { SearchIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/useDebounce";
import { useNavigate, useSearchParams } from "react-router";

type SearchProps = {
  showInput: boolean,
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Search({showInput, setShowInput}: SearchProps) { 
  // const [showInput, setShowInput] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || "";

  const debouncedValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(showInput) inputRef.current?.focus();
  }, [showInput]);

  useEffect(() => {
    if(debouncedValue.trim().length >= 2 && document.activeElement === inputRef.current){
      navigate(`/search?q=${encodeURIComponent(debouncedValue.trim())}`);
    }
  }, [debouncedValue, navigate]);

  useEffect(() => {
    if (query) {
      setSearchTerm(query);
      setShowInput(true);
    } else {
      setShowInput(false);
      setTimeout(() => setSearchTerm(''), 100);
    }
  }, [query, setShowInput]);
  
  const toggleSearch = useCallback(() => {
    setShowInput(prev => !prev);
  }, [setShowInput])

  return (
    <div className="flex items-center flex-1 relative">
      <Input 
        ref={inputRef} 
        type="text" 
        value={searchTerm}
        placeholder="Busque pelo título do filme" 
        className={cn("rounded-full opacity-0 pointer-events-none transition-all ml-auto text-xs lg:text-sm", showInput && "flex-1 opacity-100 pointer-events-auto")} 
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
      <Button 
        variant="link" 
        size="icon-lg" 
        className={cn("absolute right-0 cursor-pointer text-gray-100", showInput && "right-1")} 
        onClick={toggleSearch}
      >
        {showInput ? <XIcon /> : <SearchIcon />}
      </Button>
    </div>
  )
}