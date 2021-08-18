import { Create, FiberManualRecord } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

function Sidebar() {
	return (
		<SideBarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>Sleek FAM HQ</h2>
					<h3>
						<FiberManualRecord />
						Emmanuel Kolawole
					</h3>
				</SidebarInfo>
				<Create />
			</SidebarHeader>
		</SideBarContainer>
	);
}

export default Sidebar;

const SideBarContainer = styled.div`
	background-color: var(--slack-color);
	color: white;
	flex: 0.3;
	border-top: 1px solid #49274b;
	max-width: 260px;
	margin-top: 60px;
`;

const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding: 13px;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: white;
		border-radius: 999px;
		cursor: pointer;
	}
`;

const SidebarInfo = styled.div`
	flex: 1;

	> h2 {
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 5px;
	}

	> h3 {
		display: flex;
		font-size: 13px;
		font-weight: 400;
		align-items: center;
	}

	> h3 > .MuiSvgIcon-root {
		font-size: 14px;
		margin-top: 1px;
		color: green;
	}
`;
