import { Box, Button } from "@chakra-ui/react";
import imageUrl from "../../assets";
import { PopularCard } from "../../components";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";

export const Home = () => {
  const ref = useRef<any>();
  const [splideFuncs, setSplideFuncs] = useState({
    getPrev: () => {},
    getNext: () => {},
  });

  useEffect(() => {
    if (ref.current) {
      const { getPrev, getNext } = ref.current.splide.Components.Controller;
      setSplideFuncs({
        getPrev,
        getNext,
      });
    }
  }, [ref.current]);

  return (
    <Box>
      <Button
        w={10}
        h={10}
        bgColor="inherit"
        borderRadius="4px"
        border="2px solid #10162F"
        onClick={splideFuncs.getNext}
      >
        <ChevronRightIcon w={7} h={7} />
      </Button>
      <Box
        maxW="1000px"
        sx={{
          ".my-arrow": {
            borderRadius: "4px",
            border: "2px solid #10162F",
          },
        }}
      >
        <Splide
          ref={ref}
          onArrowsMounted={(splide, prev, next) => console.log(prev, next)}
          hasTrack={false}
          options={{
            pagination: false,
            perPage: 3,
            height: "auto",
            rewind: true,
            gap: "1rem",
            padding: "1rem",
          }}
          onMoved={(splide, newIndex) => {
            // eslint-disable-next-line
            console.log("moved", newIndex);

            // eslint-disable-next-line
            console.log("length", splide.length);
          }}
        >
          <SplideTrack>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
            </SplideSlide>
            <SplideSlide
              style={{
                marginRight: "2rem",
                width: "calc(((100% + 2rem) / 3) - 2rem)",
              }}
            >
              <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
            </SplideSlide>
          </SplideTrack>
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">Prev</button>
            <button className="splide__arrow splide__arrow--next">Next</button>
          </div>
        </Splide>
      </Box>
    </Box>
  );
};
