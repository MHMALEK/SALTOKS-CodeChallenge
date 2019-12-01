import * as React from "react"
import MainLayout from "../main-layout"
import ScrollToTop from "../../../router/scroll-to-top"
export default function withLayoutAndScrollTop(
  WrappedComponent,
  hasLayout = true,
  needScrollTopOnMount = false,
  routeName
) {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return needScrollTopOnMount ? (
        <ScrollToTop>
          {hasLayout ? (
            <MainLayout {...this.props} routeName={routeName}>
              <WrappedComponent {...this.props} />
            </MainLayout>
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </ScrollToTop>
      ) : hasLayout ? (
        <MainLayout {...this.props} routeName={routeName}>
          <WrappedComponent {...this.props} />
        </MainLayout>
      ) : (
        <WrappedComponent {...this.props} />
      )
    }
  }
}
