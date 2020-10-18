import React from "react";
import { Redirect } from "react-router-dom";
import { Message } from "semantic-ui-react";
import ScannerArea from "./Scanner/ScannerArea/ScannerArea.js";
import { FormattedMessage } from "react-intl";

class ScannerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      errorOnScan: false,
      showInfo: false,
      showPopUp: false
    };
  }
  componentDidMount() {
    this.props.changeQrMode("qrcodescan");
  }
  handleScan = data => {
    if (!data) {
      this.toggleError(true);
    } else {
      this.props.addStampByValidationLink(data, this.props.history).then(() => {
        this.closeScannerPage()
      });
    }
  };

  handleError = err => {
    // eslint-disable-line no-unused-vars
    this.props.changeQrMode("selectFromPhotos");
  };

  toggleError = (toggleTo = null) => {
    const { errorOnScan } = this.state;
    this.setState({
      errorOnScan: toggleTo === null ? !errorOnScan : toggleTo
    });
  };
  toggleShowInfo = () => {
    const { showInfo } = this.state;
    this.setState({
      showInfo: !showInfo
    });
  };

  closeScannerPage = () => {
    this.props.history.push("/home/card");
  };

  openPopUp = () => {
    this.setState({ showPopUp: true });
  };

  closeUsePopUp = i => {
    this.props.closeValidationModal();
    this.props.history.push("/home");
  };

  render() {
    const { result, errorOnScan } = this.state;
    if (result) {
      return (
        <Redirect
          to={{
            pathname: `/scanResponse/${result}`,
            state: { from: this.props.location }
          }}
        />
      );
    }
    if (
      this.props.qrscanMode === "selectFromPhotos" ||
      this.props.qrscanMode === "qrcodescan"
    ) {
      const qrscanModeIsqrcodescan = this.props.qrscanMode === "qrcodescan";
      return (
        <>
          <ScannerArea
            qrscanModeIsqrcodescan={qrscanModeIsqrcodescan}
            mode={this.props.qrscanMode}
            handleScan={this.handleScan}
            handleError={this.handleError}
            handleOnClickCloseIcon={this.closeScannerPage}
            openImageDialog={this.openImageDialog}
          />
          {errorOnScan && !qrscanModeIsqrcodescan && (
            <Message
              negative
              floating
              header={
                <FormattedMessage
                  id={"global.cantScanImageHeader"}
                />
              }
              content={
                <FormattedMessage
                  id={"global.cantScanImageDescription"}
                />
              }
              className="image-select-error-message"
              onDismiss={() => this.toggleError(false)}
            />
          )}
        </>
      );
    }
  }
}

export default ScannerPage;
