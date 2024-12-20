# Индекс Хирша

Индекс Хирша (h-индекс) - это метрика, используемая для оценки продуктивности и влияния научных исследований. Индекс определяется как максимальное значение `h`, при котором исследователь опубликовал не менее `h` статей, каждая из которых была процитирована не менее `h` раз.

## Определение

Для массива целых чисел `citations`, где `citations[i]` - это количество цитирований, полученных исследователем для своей статьи, индекс Хирша можно определить следующим образом:

- Найти максимальное значение `h`, такое что существует не менее `h` статей с `h` или более цитирований.
