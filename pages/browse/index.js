import React from "react"
import Nextfile from "../../src/frontend/Nextfile"
import readDirectory from "../../src/backend/readDirectory"

export default function Index(props) {
  return <Nextfile {...props}  />
}

export async function getServerSideProps(context) {
  const { locales } = context
  const files = await readDirectory("", true, locales)

  return {
    props: {
      files
    },
  }
}
