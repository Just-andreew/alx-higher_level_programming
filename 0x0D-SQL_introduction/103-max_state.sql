--Displays the max temperature of each state by state order.
SELECT state, MAX(temperature) AS max_temp
FROM your_table_name
GROUP BY state
ORDER BY state;
