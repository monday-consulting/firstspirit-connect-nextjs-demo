//import { AccordionItem } from "types";
import { useState } from 'react';

interface AccordionItemProps {
  primary?: boolean;
  data: {
    st_title: string; //data supposed to be type AccordionItem
  }
}

export const AccordionItem = ({
  primary = true,
  data,
}: AccordionItemProps) => {
  const mode = primary ? 'storybook-accordionitem--primary' : 'storybook-accordionitem--secondary';

  //TODO define data of type AccordionItem
  const [open, setOpen] = useState(false);
  const style = () => {
    return open ? { maxHeight: '364px' } : {};
  }
  const toggle = () => {
    setOpen(!open);
  }

  return(
    <>
    <div className="w-full p-1">
      <div className="shadow-10xl rounded-2xl border-2 border-text bg-white bg-opacity-60 px-8 py-7">
        <div className="flex cursor-pointer p-2">
          <button
            className="grow text-left text-lg font-semibold leading-normal text-text"
            onClick={toggle}
          >
            { data.st_title }
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className={"h-6 w-6 stroke-text stroke-2 duration-200" + (open ? 'rotate-180' : '')}
            onClick={toggle}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </div>
        <div
          className="max-h-0 w-auto overflow-hidden px-2 transition-[max-height] duration-200 ease-in-out"
          style={open ? { maxHeight: '364px' } : {}}
        >
          <p>{data.st_content}</p>
        </div>
      </div>
    </div>
    </>
  ) //TODO (above) insert ElementRichText instead of p tag

}
