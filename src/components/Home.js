import React, { useState, useEffect, useContext } from "react";
import { Table, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import history from "../router/history";
import { AppContext } from "../AppContext";

export default function Home(props) {
	const [isLoading, setIsLoading] = useState(false);
	const { posts, setPosts, pageCount, setPageCount } = useContext(AppContext);

	useEffect(() => {
		const handlePostsApi = () => {
			setIsLoading(true);
			axios
				.get(
					`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageCount}`
				)
				.then((res) => {
					setPosts(res.data.hits);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		};
		handlePostsApi();
		const intervalId = setInterval(() => handlePostsApi(), 10000);
		return () => clearInterval(intervalId);
	}, [pageCount, setPosts]);

	return (
		<>
			<div className="d-flex align-items-center my-2">
				<Button
					variant="outline-secondary"
					onClick={() => setPageCount(pageCount - 1)}
					disabled={pageCount === 0}
					className="mx-1"
				>
					Previous
				</Button>
				<div
					className="mx-1 rounded border border-secondary"
					style={{ padding: "6px 8px" }}
				>
					{pageCount}
				</div>
				<Button
					variant="outline-secondary"
					onClick={() => setPageCount(pageCount + 1)}
					className="mx-1"
				>
					Next
				</Button>
				{isLoading && (
					<Spinner animation="border" role="status" className="mx-1">
						<span className="sr-only">Loading...</span>
					</Spinner>
				)}
			</div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>S.No.</th>
						<th>Title</th>
						<th>URL</th>
						<th>Created At</th>
						<th>Author</th>
					</tr>
				</thead>
				<tbody>
					{posts && posts.length
						? posts.map((post, index) => (
								<tr
									key={index}
									onClick={() => history.push("/post", { post: post })}
								>
									<td>{index + 1}</td>
									<td>{post.title || "--"}</td>
									<td>{post.url || "--"}</td>
									<td>{post.created_at || "--"}</td>
									<td>{post.author || "--"}</td>
								</tr>
						  ))
						: null}
				</tbody>
			</Table>
		</>
	);
}
