import React from "react"
import Main from "../src/components/layout/Main"
import readFolderStructure from "../src/utils/readFolderStructure"

export default function Index(props) {
  return <Main {...props}  />
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
