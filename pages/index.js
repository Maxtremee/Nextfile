import React from "react"
import Main from "../src/components/layout/Main"
import readFolderStructure from "../src/utils/readFolderStructure"

export default function Index(props) {
  return <Main {...props}  />
}

export async function getServerSideProps(context) {
  const { locales } = context
  console.time('main')
  const folderStructure = await readFolderStructure(locales)
  console.timeEnd('main')

  return {
    props: {
      folderStructure
    },
  }
}
