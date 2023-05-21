import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MovieListItem from "./MovieListItem";
import { Movie } from "../../../types";

export default {
  title: "Components/MovieListItem",
  argTypes: {
    posterImage: { control: "file" },
  },
  component: MovieListItem,
} as ComponentMeta<typeof MovieListItem>;

const mockMovieProps: Movie = {
  "im:name": {
    label: "65",
  },
  "im:image": [
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/68/80/06/6880060e-052c-1408-2bb1-0d8a2da9b659/SPE_65_TH_ITUNES_WW_ARTWORK_EN_2000x3000_3Q04UV00000J9U.lsr/39x60bb.png",
      attributes: {
        height: 60,
      },
    },
    {
      label:
        "https://is1-ssl.mzstatic.com/image/thumb/Video126/v4/68/80/06/6880060e-052c-1408-2bb1-0d8a2da9b659/SPE_65_TH_ITUNES_WW_ARTWORK_EN_2000x3000_3Q04UV00000J9U.lsr/39x60bb.png",
      attributes: {
        height: 60,
      },
    },
    {
      label:
        "https://is5-ssl.mzstatic.com/image/thumb/Video126/v4/68/80/06/6880060e-052c-1408-2bb1-0d8a2da9b659/SPE_65_TH_ITUNES_WW_ARTWORK_EN_2000x3000_3Q04UV00000J9U.lsr/113x170bb.png",
      attributes: {
        height: 170,
      },
    },
  ],
  summary: {
    label:
      "After a catastrophic crash on an unknown planet, pilot Mills (Adam Driver) quickly discovers he’s actually stranded on Earth…65 million years ago. Now, with only one chance at rescue, Mills and the only other survivor, Koa (Ariana Greenblatt), must make their way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive. From the writers of A Quiet Place comes 65, a sci-fi thriller produced by Sam Raimi, Deborah Liebling, Zainab Azizi, Scott Beck and Bryan Woods.",
  },
  "im:price": {
    label: "$19.99",
    attributes: {
      amount: 19.99,
      currency: "USD",
    },
  },
  "im:contentType": {
    attributes: {
      term: "Movie",
      label: "Movie",
    },
  },
  rights: {
    label: "© 2023 Bron Creative; Columbia Pictures; Raimi Productions",
  },
  title: {
    label: "65 - Scott Beck & Bryan Woods",
  },
  link: [
    {
      attributes: {
        rel: "alternate",
        type: "text/html",
        href: "https://itunes.apple.com/us/movie/65/id1674680471?uo=2",
      },
    },
    {
      "im:duration": {
        label: 145280,
      },
      attributes: {
        title: "Preview",
        rel: "enclosure",
        type: "video/x-m4v",
        href: "https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/28/ae/c7/28aec768-5519-1307-a811-6bb38ec653e4/mzvf_15099119650585554892.640x354.h264lc.U.p.m4v",
        "im:assetType": "preview",
      },
    },
  ],
  id: {
    label: "https://itunes.apple.com/us/movie/65/id1674680471?uo=2",
    attributes: {
      "im:id": 1674680471,
    },
  },
  "im:artist": {
    label: "Scott Beck & Bryan Woods",
  },
  category: {
    attributes: {
      "im:id": 4401,
      term: "Action & Adventure",
      scheme:
        "https://itunes.apple.com/us/genre/movies-action-adventure/id4401?uo=2",
      label: "Action & Adventure",
    },
  },
  "im:releaseDate": {
    label: new Date("2023-03-10T00:00:00-07:00"),
    attributes: {
      label: "March 10, 2023",
    },
  },
};

function mockFunction() {
  console.log("mock");
}

const Template: ComponentStory<typeof MovieListItem> = function () {
  return (
    <MovieListItem
      movie={mockMovieProps}
      isFavorite
      onAddFavorite={mockFunction}
      onRemoveFavorite={mockFunction}
    />
  );
};

export const MovieListItemExample = Template.bind({});
