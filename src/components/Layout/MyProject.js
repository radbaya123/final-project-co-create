import React from "react";
import { Descriptions, Button, Card } from "antd";
import axios from "axios";
import { useQuery } from "react-query";
import { getUserSession } from "data/util";

async function getOwnProject() {
	const response = await axios.get("project", {
		params: {
			admin: getUserSession().username,
		},
	});
	return response;
}

function MyProject() {
	const { data, status } = useQuery("project", getOwnProject);
	console.log(data);

	return (
		<div>
			{status === "loading" && <div> Loading Data</div>}
			{status === "error" && <div> Error Fetching Data</div>}
			{status === "success" &&
				(data.length <= 0 ? (
					<div>Kamu belum memiliki project </div>
				) : (
					<div>
						{data.map((filtered) => {
							const { id, kategori_project, nama_project, tanggal_mulai, link_trello, deskripsi_project, invited_user_id, collaborator_user_id, admin } = filtered;
							return (
								<MyProjectCard
									key={id}
									category={kategori_project}
									name={nama_project}
									date={tanggal_mulai}
									description={deskripsi_project}
									link={link_trello}
									invited_user_id={invited_user_id.map((value) => `${value}, `)}
									collaborator={collaborator_user_id.map((value) => `${value}, `)}
								/>
							);
						})}
					</div>
				))}
		</div>
	);
}

function MyProjectCard(props) {
	const { category, name, date, description, collaborator, link, invited_user_id } = props;
	return (
		<Card style={{ marginBottom: "1.5rem" }}>
			<Descriptions bordered size="small" extra={<Button type="primary">Edit</Button>}>
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
export default MyProject;
