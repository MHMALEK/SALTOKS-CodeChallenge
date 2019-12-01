import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"
import BreadCrumb from "./bread-crumb";

const MainLayout = (props) => {
  const { children } = props
  return (
    <div className="main-layout min-h-screen flex flex-col">
      <div className="flex-grow">
        <Header>
          <div className="text-sm lg:flex-grow">

            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Search Repos
            </Link>
            <Link
              to="/repos/sschoger/heroicons-ui"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Sample Repo
            </Link>
            <Link
              to="/there-is-no-one-here"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              not found
            </Link>
          </div>
        </Header>
        <BreadCrumb url={props.location.pathname}> {props.routeName} </BreadCrumb>

        <main className="main-layout--content">{children}</main>
      </div>

      <Footer>By: Mhos.Malek@gmail.com</Footer>

    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
}

export default MainLayout
