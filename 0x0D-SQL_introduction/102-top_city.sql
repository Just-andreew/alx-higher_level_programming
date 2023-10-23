--Displays the top three cities ordered by temperature in decending order.
SELECT city, AVG(temperature) AS avg_temp
FROM your_table_name
WHERE MONTH(date) IN (7, 8) -- Selects records for July and August
GROUP BY city
ORDER BY avg_temp DESC
LIMIT 3; -- Limits the result to the top 3 cities
