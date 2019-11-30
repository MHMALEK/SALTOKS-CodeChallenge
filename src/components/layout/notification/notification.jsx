import { connect } from "react-redux"
// import AppNotificationDumb from "Component/base/notification"
import { hideNotificationAction } from "store/notification/action"

function AppNotification(props) {
  //   return <AppNotificationDumb {...props} />
}
const mapStateToProps = (state) => ({
  isShown: state.notification.isShown,
  title: state.notification.title,
  message: state.notification.message,
  type: state.notification.type
})

const mapDispatchToProps = (dispatch) => ({
  dismiss: () => {
    dispatch(hideNotificationAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppNotification)
