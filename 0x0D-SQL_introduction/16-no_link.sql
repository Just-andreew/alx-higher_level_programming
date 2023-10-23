--Lists all records in descending order where the name isn't null.
SELECT score, name
FROM second_table
WHERE name IS NOT NULL
ORDER BY score DESC;
