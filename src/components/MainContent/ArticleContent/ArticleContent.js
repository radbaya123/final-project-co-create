import React from "react";
import ArticleCollapse from "../CardArticle/ArticleCollapse";
import { MailOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Row, Col, Input, Tabs } from "antd";
import ProjectCollapse from "../ProjectCollapse";

const { TabPane } = Tabs;

const { Search } = Input;

function ArticleContent() {
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
									<MailOutlined /> Article
								</span>
							}
							key="1"
						>
							<ArticleCollapse />
						</TabPane>
						<TabPane
							tab={
								<span>
									<AppstoreOutlined /> Project
								</span>
							}
							key="2"
						>
							<ProjectCollapse />
						</TabPane>
					</Tabs>
				</Col>
			</Row>
		</div>
	);
}

export default ArticleContent;
