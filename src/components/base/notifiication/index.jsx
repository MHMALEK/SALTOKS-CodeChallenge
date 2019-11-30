/* eslint-disable react/display-name */
import * as React from "react"
import { Notification } from "ui/components/notification"

export const AppNotification = React.memo((props) => {
  if (!props.isShown) return null
  return (
    <Notification
      title={props.title}
      message={props.message}
      type={props.type}
      onDismiss={props.dismiss}
      position="bottom"
    />
  )
})
