/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import shorthash from "shorthash";
import * as FileSystem from "expo-file-system";

type CacheImageProps = {
  style: StyleProp<ImageStyle> | undefined;
  uri: string;
};

const CacheImage: React.FC<CacheImageProps> = ({ style, uri }) => {
  const [source, setSource] = useState<ImageSourcePropType>({});

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const name = shorthash.unique(uri);
      const path = `${FileSystem.cacheDirectory}${name}`;
      const image = await FileSystem.getInfoAsync(path);
      if (image.exists) {
        console.log("read image from cache");
        setSource({
          uri: image.uri,
        });
        return;
      }

      console.log("downloading image to cache");
      const newImage = await FileSystem.downloadAsync(uri, path);
      setSource({
        uri: newImage.uri,
      });
    })();
  }, [uri]);

  return <Image style={style} source={source} />;
};

export default CacheImage;
