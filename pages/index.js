import React from "react"
import MainWrapper from "../src/components/layout/MainWrapper"
import readFolderStructure from "../src/utils/readFolderStructure"

export default function Index(props) {
  return <MainWrapper {...props}  />
}

export async function getStaticProps(context) {
  const { locales } = context
  const folderStructure = await readFolderStructure(locales)

  return {
    props: {
      folderStructure
    },
  }
}
