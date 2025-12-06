import Header from "./components/header/component.jsx"
import BreadCrumb from "./components/breadcrumb/component.jsx"
import PageTitle from "./components/pageTitle/component.jsx"
import Search from "./components/search/component.jsx"
import Banner from "./components/banner/component.jsx"
import Filter from "./components/filter/component.jsx"
import Description from "./components/description/component.jsx"
import Funding from "./components/funding/component.jsx"
import NoData from "./components/noData/components.jsx"

import {books} from "./data.json/book.js"

import { useState } from "react"


export default function App() {


  const [search, setSearch] = useState("")

  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Header/>
      <BreadCrumb/>
      <div style={{display: "flex"}}>
        <PageTitle/>
        <Search onSearch={(value) => setSearch(value)}/>
        <Banner/>
      </div>
      <div style={{display: "flex"}}>
        <Filter/>
        <div>
          {filteredBooks.length === 0 ? (
             <NoData/>

          ) : (
            filteredBooks.map(book => (
              <Description
                key={book.id}
                img={book.img}
                language={book.language}
                rating={book.rating}
                title={book.title}
                author={book.author}
                oldPrice={book.oldPrice}
                newPrice={book.newPrice}
                lavelIcon={book.lavelIcon}
                lavel={book.lavel}
                departmentIcon={book.departmentIcon}
                department={book.department}
                strategyIcon={book.strategyIcon}
                strategy={book.strategy}
                likeIcon={book.likeIcon}
              />
            ))
          )}
        </div>
      <Funding/>
      </div>

    </div>
  )
}