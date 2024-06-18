import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import LiveChat from "./LiveChat";


const WatchPage = () => {
  let [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]); 

  return (
    <div className={isMenuOpen ? "pointer-events-none blur-3xl bg-teal-100 fixed" : " "}>
      <div className="lg:flex lg:justify-center lg:px-12">
        <div className="lg:pr-6 lg:lg:max-w-[820px] ">
          <div className="sticky top-14 sm:static">
            <div className="relative pb-[56%] h-0 md:pb-[calc(43%)] lg:static lg:pb-0 lg:h-full">
              <iframe
                className="absolute inset-0 w-4/6 h-5/6 ml-5 mt-20"
                src={
                  "https://www.youtube.com/embed/" +
                  searchParams.get("v") +
                  "?autoplay=1&fs=1"
                }
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
        </div>

        <div className="lg:min-w-[350px] absolute right-10 top-13 bottom-13 mt-5 mr-10 w-1/6 ">
          <LiveChat />
          
        </div>
      </div>
    </div>
  );
};

export default WatchPage;