import arxiv
import csv
import itertools
from concurrent.futures import ThreadPoolExecutor


def query_categorie(cat: str) -> list:
    results = arxiv.Search(
        query=f'cat:{cat}',
        max_results=10, #float('inf'),
    )
    results = [(res.title, res.categories[0]) for res in results.results()]
    return results



if __name__ == '__main__':
    categories = ['cs.LG', 'cs.CV', 'cs.AI']

    with ThreadPoolExecutor(max_workers=len(categories)) as executor:
        all_papers = executor.map(query_categorie, categories)
    all_papers = list(itertools.chain(*list(all_papers)))

    with open('data.csv', 'w') as file:
        csvwriter = csv.writer(file, delimiter=';')
        csvwriter.writerows(all_papers)

