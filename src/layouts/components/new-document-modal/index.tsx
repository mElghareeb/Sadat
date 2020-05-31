import React from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import {
  ArrowDownOutlined, ArrowUpOutlined
} from '@ant-design/icons';
import { I18n } from 'react-redux-i18n';

import './style.scss';

interface newDocumentInterface {
  showModal: boolean,
  showNewDocumentModal: any
}


class NewDocumentModal extends React.Component<newDocumentInterface> {


  render() {
    return (
      <div>

        <Modal
          title={I18n.t("dashboard.newDocument")}
          centered
          visible={this.props.showModal}
          onOk={() => this.props.showNewDocumentModal(false)}
          onCancel={() => this.props.showNewDocumentModal(false)}
        >
          <div className="modal-container">
            <div className="new-document-link">
              <Link to='/new-internal-documents' onClick={() => this.props.showNewDocumentModal(false)}>
                <div className="link-container">
                  <div className="icon-container">
                    <ArrowDownOutlined  style={{ fontSize: '26px', color: '#222' }}/>
                  </div>
                  <div className="link-txt">{I18n.t("dashboard.internalDocuments")}</div>
                </div>
              </Link>
            </div>

            <div className="new-document-link">
              <Link to='/new-external-documents' onClick={() => this.props.showNewDocumentModal(false)}>
                <div className="link-container">
                  <div className="icon-container">
                    <ArrowUpOutlined  style={{ fontSize: '26px', color: '#222' }} />
                  </div>
                  <div className="link-txt">{I18n.t("dashboard.externalDocuments")}</div>
                </div>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default NewDocumentModal;
