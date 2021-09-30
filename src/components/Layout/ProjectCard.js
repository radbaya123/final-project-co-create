import React from "react";
import { Descriptions, Button, Card, Space } from "antd";

const Item = Descriptions.Item;

function ProjectCard(props) {
  const { category, name, date, description, collaborator, link, invited_user_id } = props;
  return (
    <Card style={{ marginBottom: "1.5rem" }}>
      <Descriptions
        bordered
        size="small"
        extra={
          <Space>
            <Button type="primary" /*onClick={props.btn_click}*/>
              Edit
            </Button>
            <Button type="danger" onClick={props.btn_click}>
              Hapus
            </Button>
          </Space>
        }
      >
        <Descriptions.Item label="Kategori Project" span={24}>
          {category}
        </Descriptions.Item>
        <Descriptions.Item span={24} label="Nama Project">
          {name}
        </Descriptions.Item>
        <Descriptions.Item span={24} label="Tanggal Mulai">
          {date}
        </Descriptions.Item>
        <Descriptions.Item span={24} label="Deskripsi Project">
          {description}
        </Descriptions.Item>
        <Descriptions.Item span={24} label="Link Trello">
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
        </Descriptions.Item>
        <Descriptions.Item span={24} label="Member yang Kamu Undang">
          {invited_user_id}
        </Descriptions.Item>
        <Descriptions.Item span={24} label="Kolaborator">
          {collaborator}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default ProjectCard;
