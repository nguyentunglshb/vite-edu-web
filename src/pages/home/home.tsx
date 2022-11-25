import { HStack, Box, Button } from "@chakra-ui/react";
import imageUrl from "../../assets";
import { PopularCard } from "../../components";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ArrowRightIcon from "../../assets/icons/arrow-right.icon";
import { ChevronRightIcon } from "@chakra-ui/icons";

export const Home = () => {
  return (
    <Box>
      <Button
        w={10}
        h={10}
        bgColor="inherit"
        borderRadius="4px"
        border="2px solid #10162F"
      >
        <ChevronRightIcon w={7} h={7} />
      </Button>
      <Box maxW="1200px">
        <Splide
          options={{
            arrows: false,
            pagination: false,
            perPage: 3,
            height: "auto",
            rewind: true,
            // gap: "1rem",
          }}
          onMoved={(splide, newIndex) => {
            // eslint-disable-next-line
            console.log("moved", newIndex);

            // eslint-disable-next-line
            console.log("length", splide.length);
          }}
        >
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Javascript" bgImg={imageUrl.jsImg} />
          </SplideSlide>
          <SplideSlide
            style={{
              marginRight: "2rem",
              width: "calc(((100% + 2rem) / 3) - 2rem);",
            }}
          >
            <PopularCard subject="Python" bgImg={imageUrl.pythonImg} />
          </SplideSlide>
        </Splide>
      </Box>
    </Box>
  );
};
