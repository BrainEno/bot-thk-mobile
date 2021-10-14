import React from "react";
import { View, Text } from "react-native";
import { Article } from "../components/Article";

const blogs = [
  {
    identifier: "1",
    title: "blog1",
    imageUrn:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABAlBMVEX///9ChfT7vATqQzUPnVj7ugD7uAA6gfQzfvP7twApevM3gPQ+g/QufPPqQTN0ofb5+/8AmlHpOirj6/24zfrZ5PzS3/z8033M2/unwfmsxfnu8/6WtvizyfojePODqvedu/hVj/UAlEPpMB3pLRnqPC392I3+6sOPsfh+p/dRjfXG1/tunfZhlvX62tj0qaX85uX3xcPvf3jsXVPxk472u7j0r6v+9ub8yVX7wTD80G/95bb936L+///x+fWIxKHb7eJnt4k6p22p1LrF4dGNxqUwpWdVsH3rTEDS6Nv74N/udW3tZFvxjYfvenL97+78zGD+7c793Jn+7Mr7xUH/+Ou8sgq2AAAHU0lEQVR4nO2ca1vaShCAQSCEkIBEULnILaiAVoviDa+tvdhaT21P+///ytkgKOS+yQ6bcOb92uep8z6zOzs7SYjFEARBEARBEARBEARBEARBEARBEARBEOT/x/XaZrFc6zYa3W6zUlyv8o6HLaVKL15XFDGbHpMVRVGqt7rFNd6BMWG1mJcUUY6bkNOiInc3eccXlOK+ZGX3ZqkojXXeQfqnWhOd9Caklf4W70j9Ue1JaVe9F0SxfM07XGpWG5J7+mYclQrviCkpe87fq2M8SkWn1Bcp/XSk/CrvwL3SlHz4EdJiNNK42vKTwDFyvcs7eg+URNodOIvYCv1KLdZpSqhFGuWQt3J+t+AMSom3hBNdJbBgXJZCXG9YCBLqoVVsshEkJ2NIF+pW8D04QVZCeUFer7MS1B1DeGhUWS3RF8N3vH3M9IOdg0bEGm8hI13frZoNUsiu/uvMqswr6XBdipn7EcMGb6lZalkAxXqITsUq+zWq0+ft9cY+2zo6RSnyFptSgkkh2Yq8zaa8g0khORRDMkgFSyFpbXi7vdCDSmFYdiJQIR0jt3jb6ZQhzsIpUhimNoB+pJqGoAEHrDNxffTG2y8Wa0Iu0lBM3vqggvFsk7cgZCXV4V9N91jffI3UeU9sukGeUniB+/OoFrAg/43IcoRoiZznK7jGdIZoDV9D8EJDGje+paYCb6jwbU1r0KWUGPoZnF7fsJpFAt4Np4h7tEHd3Cbb7Xby9o6FIdAMas6QdpRx2y4kdQrtDwwSCTaieSNL+bbUxxe/sWPyJrBhawGGZaqIvr4JEsUvgQ2BbxZjwyZNQPft5CyF26CGi8ghlWEhOU876DpdxD6kWaWf2gbDwn1Aw7DV0s/GHBY+BDRcxHlIMzP9YDL8GNAwbD2NyTAZtJpWYOdQY0OavvTWlMOvAQ3Ddre4Nxl+DmgIfz+km5jeGGtp+y6g4TX4HT9Nd8c3bMTAhWYBTQ3lnOamwDaFi5i1UV6evs2u0/anwIKxInSpkWhf4rsrTNNYYCEIPvO2fyHjYHByMjj4afEvnwvtAqF9G/zupAMsmLV8vHYwfOhomqpqWkc9Gpj//e7+/v4bE70YeFdj1dEMHjpqLjEht62ph6xkLCmBnohy1vQH3x9rr3oTSVW1yCM7IAXjadMnJqcdg9/YsXMEaAj6iNT0gPSpY/bTUY/hDBf6LsaRZi2YSGw/wCnm4e6Ixrvh0FaQKMJlEa7WGOvMwGaJThbqE5gi3HtthhGNalFkZugcQBmuAyVRFuf/zlB1FEzk4LYiUBLF+Wn3T8c1qqOBHYtrQOV0/q8cuqSQJBGu2HQhzkTjN2w551043onvoQyvAZpT4+X+u+siJeX0FMowtsl8ncqiYQJ16rpIyZn4CGYYa7Bep5Lxbv+07W6YU+EMY3HG3z2ZWu4f7tuQbERAQ7btadr8OtuDJ0OrOz8r9lgqGjdhzFMphSymOmV2rY3Vy88J/oasPnS2+dT5mPsqJTTYjBbrliPSIy+1VIMVJIossmgt6KFpI4Y/oA1j3eDlxu4HBw40d0PgqduYcsBHNbJo++q6ccRmtQ3BbogzbCpBjv5s336I/+R+t0gsQJAc/X3/DZzSc/iP37u23oCN9zxdnytVdvmQ69GlmoJ2pfOsx32kUVb2XR4zuV3ytZPF6I2pUf2WmY6Ydn+r5FBzEtyGPypmqeapfs8sKzW9/K+PDsVmgWt0Qmnfq6OclWoeX7g4tt2KOeCW1JK1huPPQk79xHTZ+wslxzZZzGnfAU3sWd1qSVknSVmU8nQP6v+xevaUUB+AW24HqpV3dcXSUhYVpVek/tbgRDOlcbszhAjdO6ubzX1FEfWfoJV19B+hVaR4r+Lz28JhZ3a8n1M7jxy2oJlqqVipdXv5fK/RbW7trQX6TuT0uKOpqrqtqlonMQyFH3N+Dk6HT0/DwwG//YcgCIIgvDm73Hn+c7Fycb5x9Yt3LACc7axkhNTKmJQgCKMlk/x1npnYTUllLi55R8WQ58yKBcLFGe/AGLErpKwECZkd3rExYccygZM0nvOOjgEjwV6QbMcL3vEFxllwCRR/uwgSxT+8YwzEL4c9+LoXI11u3P0ImQgf/huua3RMdLfiXw9rdLxOI9vdbNid9CZ4R+oXjykkSfyXd6j+uPS2CwmpEe9Y/fHsVZAkkXes/vCcQmIYyQPjjMbwine0fvC+DaO6Ed1b0hkieYvyfhquRLStoTKM5Jm//IY7S79Kr5a+0uzSnBYbvKP1w5nnxjuy9yeKfZiJ5mx4RKHIO1Z/eN+I0dyGMYplGtFFStGZRndk6tEwwuNEb4d+KpLH/YQLTyn8yzvMAHiZmGaiedpP2XVVFKJ6Uky5clEUnnlHGBhnxSUQdF6oS/Ig/++FzaGREnZ5x8aKK8HCMZWJeo2Z47dgeOVEyIyi2ozasTsSMkRTRxAy55Eccrtydvl7YzTa2LmMbh+KIAiCIAiCIAiCIAiCIAiCIAiCIAiCILT8ByxVq3sgXTGvAAAAAElFTkSuQmCC",
    desc: "my first blog",
    author: "author1",
    createdAt: "2021/3/28",
    body: "blog1 body kajdflajgldkajdjflajgeidafaed",
  },
  {
    identifier: "3",
    title: "blog3",
    desc: "my third blog",
    author: "author3",
    createdAt: "2021/1/28",
    body:
      "blog3 body dfafdfeeafdafedafdafdafdddfdddddddddddddddddddddddddddddddddddddddddddddd",
  },
];

interface BlogsProps {
  match: any;
}

const Blogs: React.FC<BlogsProps> = ({ match }) => {
  return (
    <View>
      <Text>{JSON.stringify(match.params.id)}</Text>
      <Article blog={blogs[match.params.id]} />
    </View>
  );
};

export default Blogs;
