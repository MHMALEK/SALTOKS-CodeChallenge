import React from "react"
import PropTypes from "prop-types"

export default class LazyLoad extends React.Component {
  constructor(props) {
    super(props)
    this.lazyLoadRefElement = React.createRef()
    this.startWatchingElement = this.startWatchingElement.bind(this)
    this.observeElement = this.observeElement.bind(this)
    this.isIntersectionObserverSupported = "IntersectionObserver" in window
  }
  state = {
    isElementOnViewPort: false
  }
  componentDidMount() {
    this.startWatchingElement()
  }
  startWatchingElement() {
    if (this.isIntersectionObserverSupported) {
      this.observeElement()
    }
  }
  observeElement() {
    const { current } = this.lazyLoadRefElement
    let lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setState({
            isElementOnViewPort: true
          })
          this.props.onItemShownOnViewPort()
          lazyObserver.unobserve(current)
        }
      })
    })
    lazyObserver.observe(current)
  }
  render() {
    const { isElementOnViewPort } = this.state
    const { children, placeholder } = this.props
    return (
      <div ref={this.lazyLoadRefElement}>
        {!isElementOnViewPort ? <div> {placeholder} </div> : children}
      </div>
    )
  }
}

LazyLoad.propTypes = {
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.element,
  onItemShownOnViewPort: PropTypes.func
}

LazyLoad.defaultProps = {
  placeholder: <p>Default Placeholder</p>
}
