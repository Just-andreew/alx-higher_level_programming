#include "lists.h"

/**
 * is_palindrome - checks if a singly linked list is a palindrome
 * @head: pointer to pointer of the head node of list
 * Return: 0 if not a palindrome, 1 if a palindrome
 */
int is_palindrome(listint_t **head)
{
    if (*head == NULL || (*head)->next == NULL)
        return (1);

    listint_t *slow = *head;
    listint_t *fast = *head;
    listint_t *prev = NULL;
    listint_t *mid = NULL;
    listint_t *second_half = NULL;
    int result = 1;

    while (fast != NULL && fast->next != NULL)
    {
        fast = fast->next->next;
        prev = slow;
        slow = slow->next;
    }

    if (fast != NULL)
    {
        mid = slow;
        slow = slow->next;
    }

    second_half = slow;
    prev->next = NULL;
    reverse_list(&second_half);
    result = compare_lists(*head, second_half);
    reverse_list(&second_half);

    if (mid != NULL)
    {
        prev->next = mid;
        mid->next = second_half;
    }
    else
        prev->next = second_half;

    return result;
}

/**
 * reverse_list - reverses a linked list
 * @head: pointer to pointer of the head node of list
 */
void reverse_list(listint_t **head)
{
    listint_t *prev = NULL;
    listint_t *current = *head;
    listint_t *next = NULL;

    while (current != NULL)
    {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    *head = prev;
}

/**
 * compare_lists - compares two linked lists for equality
 * @list1: pointer to the head node of the first list
 * @list2: pointer to the head node of the second list
 * Return: 1 if lists are equal, 0 if not
 */
int compare_lists(listint_t *list1, listint_t *list2)
{
    while (list1 != NULL && list2 != NULL)
    {
        if (list1->n != list2->n)
            return 0;
        list1 = list1->next;
        list2 = list2->next;
    }

    if (list1 == NULL && list2 == NULL)
        return 1;
    
    return 0;
}
