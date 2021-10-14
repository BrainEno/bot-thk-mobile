import React from "react";
import { useMutation, gql } from "@apollo/client";
import { View } from "react-native";

interface uploadFormProps {}

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const uploadForm: React.FC<uploadFormProps> = ({}) => {
  return <View></View>;
};
