import React from "react";
import { Descriptions, Button, Card, Row, Col, Space } from "antd";
import axios from "axios";
import { useQuery } from "react-query";
import { getUserSession } from "data/util";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

async function getProject() {
	const response = await axios.get("project");
	return response;
}

async function joinProject(id, data) {
	const response = await axios.patch(`project/${id}`, data);
	return response;
}

function CollabInvitation() {
	const { data, status } = useQuery("project", getProject);

	const history = useHistory();

	const accept = () => {};

	return (
		<div>
			{status === "success" && (
				<div>
					<h2>Undangan Kolaborasi</h2>
					{data
						.filter((value) => {
							return value.invited_user_id.includes(getUserSession().username);
						})
						.map((value) => {
							const { id, kategori_project, nama_project, tanggal_mulai, deskripsi_project, admin, collaborator_user_id, onDeny, onAccept, invited_user_id } = value;
							const indexNum = invited_user_id.indexOf(getUserSession().username);
							return (
								<CollabCard
									key={id}
									category={kategori_project}
									name={nama_project}
									date={tanggal_mulai}
									description={deskripsi_project}
									admin={admin}
									collaborator={collaborator_user_id.length > 0 ? collaborator_user_id.map((col) => `${col}, `) : `Belum ada kontributor`}
									onAccept={() => {
										joinProject(value.id, {
											invited_user_id: [...invited_user_id.slice(0, indexNum), ...invited_user_id.slice(indexNum + 1)],
											collaborator_user_id: collaborator_user_id.concat(getUserSession().username),
										});
										history.push("/dashboard/member/project-saya");
									}}
									onDeny={() => {
										joinProject(value.id, {
											invited_user_id: [...invited_user_id.slice(0, indexNum), ...invited_user_id.slice(indexNum + 1)],
										});
										toast.error(`Anda menolak bergabung dalam project ${nama_project}`);
										history.push("/dashboard/member/project-saya");
									}}
								/>
							);
						})}
				</div>
			)}
		</div>
	);
}

function CollabCard(props) {
	const { category, name, date, description, admin, collaborator, onAccept, onDeny } = props;
	return (
		<Card style={{ marginBottom: "1.5rem" }}>
			<Descriptions bordered size="small" style={{ marginBottom: "1rem" }}>
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
				<Descriptions.Item span={24} label="Admin">
					{admin}
				</Descriptions.Item>
				<Descriptions.Item span={24} label="Kolaborator">
					{collaborator}
				</Descriptions.Item>
			</Descriptions>
			<Row>
				<Col span={8} offset={16} style={{ display: "flex", flexFlow: "row-reverse" }}>
					<Space>
						<Button type="danger" onClick={onDeny}>
							Tolak
						</Button>
						<Button style={{ backgroundColor: "green", color: "white", border: "none" }} onClick={onAccept}>
							Bergabung
						</Button>
					</Space>
				</Col>
			</Row>
		</Card>
	);
}
export default CollabInvitation;
