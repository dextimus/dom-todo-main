function getStatusButtonLabel(status) {
  switch (status) {
    case "created":
      return "Start";
    case "started":
      return "Stop";
    default:
      return "";
  }
}

function getTaskNextStatus(status) {
  switch (status) {
    case "created":
      return "started";
    case "started":
      return "completed";
    default:
      return status;
  }
}

export { getStatusButtonLabel, getTaskNextStatus };
