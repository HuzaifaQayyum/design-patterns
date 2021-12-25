import { BrowsingHistory } from "./browing-history";

const browingHistory = new BrowsingHistory();
browingHistory.add("a");
browingHistory.add("b");

const iterator = browingHistory.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.current());
    iterator.next();
}