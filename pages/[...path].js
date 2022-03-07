import React from "react"
import MainWrapper from "../src/components/layout/MainWrapper"
import readFolderStructure from "../src/utils/readFolderStructure"

export default function Path(props) {
  return <MainWrapper {...props} />
}

export async function getServerSideProps(context) {
  const { locales } = context
  const folderStructure = await readFolderStructure(locales)

  return {
    props: {
      folderStructure
    },
  }
}
