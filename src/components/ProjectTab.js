import React from "react";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Row, Col, Input, Tabs } from "antd";
// import ProjectCollapse from "components/MainContent/ProjectCollapse";
// import ArticleCollapse from "./MainContent/CardArticle/ArticleCollapse";
import MyProject from "./Layout/MyProject";
import OtherProject from "./Layout/OtherProject";

const { TabPane } = Tabs;

const { Search } = Input;

function ProjectTab() {
	const callback = (key) => {
		console.log(key);
	};

	return (
		<div>
			<Row>
				<Col span={24}>
					<Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={<Search placeholder="input search text" onSearch={(value) => console.log(value)} enterButton />}>
						<TabPane
							tab={
								<span>
									<MailOutlined /> Project Saya
								</span>
							}
							key="1"
						>
							<MyProject />
						</TabPane>
						<TabPane
							tab={
								<span>
									<AppstoreOutlined /> Project Lain
								</span>
							}
							key="2"
						>
							<OtherProject />
						</TabPane>
					</Tabs>
				</Col>
			</Row>
		</div>
	);
}

export default ProjectTab;
