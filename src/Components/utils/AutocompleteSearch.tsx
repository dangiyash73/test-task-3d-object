import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotesIcon from "@mui/icons-material/Notes";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { DataProps, Task, recentSearch } from "../../utils";

const AutocompleteSearch: React.FC<DataProps> = ({
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragStart,
  onDrop,
  onDragOver,
  pending,
}) => {
  const nRef = useRef<HTMLInputElement>(null);
  const [filteredPending, setFilteredPending] = useState<Task[]>([]);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value.toLowerCase();
    setValue(e.currentTarget.value);
    if (input.length >= 1) {
      const filteredPending = pending
        .filter((item) => {
          const fullName = item.title.toLowerCase();
          return fullName.startsWith(input);
        })
        .slice(0, 10);

      setFilteredPending(filteredPending);
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event: MouseEvent) => {
    if (nRef.current && !nRef.current.contains(event.target as Node)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showOptions]);

  return (
    <div className="flex flex-1 justify-center mt-3 ">
      <div className="relative mb-4 flex flex-wrap items-stretch">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={value}
          onChange={onChange}
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
          <NotesIcon />
          <SearchIcon />
        </button>
      </div>

      {showOptions && (
        <div
          ref={nRef}
          className="absolute flex justify-center top-full h-100 z-10 mt-2 w-full max-w-2xl overflow-hidden  bg-white border-2 border-gray-900 border-2 "
        >
          <div className="flex flex-col w-1/3 bg-white border-r  border-gray-700">
            <div className="p-2 border-b ">Suggestions</div>

            {recentSearch.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-300 px-3 py-3 cursor-pointer text-sm"
              >
                <span>{item.item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-1/3 bg-white border-r  border-gray-700">
            <div className="p-2 border-b">Results</div>
            <div
              className="mt-2"
              onDragLeave={(e) => onDragLeave(e)}
              onDragEnter={(e) => onDragEnter(e)}
              onDragEnd={(e) => onDragEnd(e)}
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, false, "In Progress")}
            >
              {filteredPending.map((item) => (
                <div
                  key={item.id.toString()}
                  id={item.id.toString()}
                  className="flex items-center border-b border-gray-300 px-1 py-2 cursor-pointer text-sm"
                  draggable
                  onDragStart={(e) => onDragStart(e)}
                  onDragEnd={(e) => setShowOptions(false)}
                  onClick={() => onSearch(item.title)}
                >
                  <RadioButtonCheckedIcon />
                  <span className="px-1">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col px-2 w-1/9 bg-white border-r pb-5  border-gray-700 ">
            <div className="relative mb-2 flex flex-wrap items-stretch">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none w-full"
                type="search"
                name="search"
                placeholder="Search"
                value=""
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ArrowDropDownOutlinedIcon />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 mb-2">
              <label className="flex w-full bg-white border-2 border-gray-700 rounded-lg text-sm px-2 h-10">
                <input
                  type="radio"
                  name="hs-radio-in-form"
                  id="hs-radio-in-form"
                />
                <span className="text-gray-500 text-gray-400 self-center mx-2">
                  Me
                </span>
              </label>

              <label className="flex w-full bg-white border-2 border-gray-700 rounded-lg text-sm px-2 h-10">
                <input
                  type="radio"
                  name="hs-radio-in-form"
                  id="hs-radio-checked-in-form"
                  checked
                />
                <span className="text-gray-500 text-gray-400 self-center mx-2">
                  My group
                </span>
              </label>
            </div>
            <label className="flex w-full bg-white border-2 border-gray-700 rounded-lg text-sm px-2 h-10 my-1">
              <input type="radio" name="hs-radio-in-form" checked />
              <span className="text-gray-500 text-gray-400 self-center mx-2">
                Current Workspace
              </span>
            </label>
            <div className="grid sm:grid-cols-2 gap-2 mb-2">
              <label className="flex w-full bg-white border-2 border-gray-700 rounded-lg text-sm px-2 h-10">
                <input
                  type="radio"
                  name="hs-radio-in-form"
                  id="hs-radio-in-form"
                />
                <span className="text-gray-500 text-gray-400 self-center mx-2">
                  Latest
                </span>
              </label>

              <label className="flex w-full bg-white border-2 border-gray-700 rounded-lg text-sm px-2 h-10">
                <input
                  type="radio"
                  name="hs-radio-in-form"
                  id="hs-radio-checked-in-form"
                  checked
                />
                <span className="text-gray-500 text-gray-400 self-center mx-2">
                  Revision
                </span>
              </label>
              <label className="flex w-full bg-white border-2 border-gray-700 rounded-lg text-sm px-2 h-10">
                <input
                  type="radio"
                  name="hs-radio-in-form"
                  id="hs-radio-in-form"
                />
                <span className="text-gray-500 text-gray-400 self-center mx-2">
                  Reserved
                </span>
              </label>

              <label className="flex w-full bg-white border-2 border-gray-700 rounded-lg text-sm px-2 h-10">
                <input
                  type="radio"
                  name="hs-radio-in-form"
                  id="hs-radio-checked-in-form"
                  checked
                />
                <span className="text-gray-500 text-gray-400 self-center mx-2">
                  Finalised
                </span>
              </label>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-between gap-x-1.5 rounded-md border-2 border-gray-700 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50 mb-2"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Type
                <div className="ml-10">
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-between gap-x-1.5 rounded-md border-2 border-gray-700 bg-white mb-2 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Owner
                <div className="ml-10">
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div>
              <input
                className="border-2 border-gray-700 bg-white h-10 p-2 rounded-lg text-sm focus:outline-none w-full justify-between mb-2"
                type="date"
                name="date"
              />
            </div>
            <div>
              <input
                className="border-2 border-gray-700 bg-white h-10 p-2 rounded-lg text-sm focus:outline-none w-full justify-between"
                type="date"
                name="date"
                value=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutocompleteSearch;
