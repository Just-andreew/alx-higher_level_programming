--Lists all records with score of ten and above from the table second_table.
SELECT name, score
FROM second_table 
WHERE score >= 10
ORDER BY score DESC;
