import React from "react"
import MainWrapper from "../src/components/layout/MainWrapper"
import readFolderStructure from "../src/utils/readFolderStructure"

export default function Path(props) {
  return <MainWrapper {...props} />
}

export async function getServerSideProps(context) {
  const { locales, req } = context
  const { host } = req.headers
  const folderStructure = await readFolderStructure('', locales)

  return {
    props: {
      host,
      folderStructure
    },
  }
}
